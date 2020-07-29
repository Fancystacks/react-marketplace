import React from 'react'
import { Formik } from 'formik';
import { View, StyleSheet, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup'
import { Notifications } from 'expo'

import messagesApi from '../api/messages'
import { AppForm, AppFormField, SubmitButton } from './forms'

const validationSchema = Yup.object().shape({
	message: Yup.string().required("You can't send an empty message")
})

export default function ContactSeller({ listing }) {
	const handleSubmit = async ({ message }, { resetForm }) => {
		Keyboard.dismiss()

		const result = await messagesApi.send(message, listing.id)

		if (!result.ok) {
			console.log('Error', result)
			return Alert.alert('Error', 'Could not send the message to the seller')
		}

		resetForm()

		Notifications.presentLocalNotificationAsync({
			title: 'Awesome!',
			body: 'Your message was sent to the seller.'
		})
	}

	return (
		<AppForm
			initialValues={{ message: '' }}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}>
			<View style={styles.container}>
				<AppFormField name='message' placeholder='Message...' />
				<SubmitButton title='Contact Seller' />
			</View>
		</AppForm>
	)
}

const styles = StyleSheet.create({
	container: {}
})