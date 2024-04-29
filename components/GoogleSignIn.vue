<template>
	<UButton
		block
		size="xl"
		icon="i-devicon-google"
		color="white"
		label="Continue with Google"
		@click="SignInWithGoogle"
	/>
</template>
<script setup lang="ts">
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

async function SignInWithGoogle() {
	const provider = new GoogleAuthProvider();
	const auth = getAuth();
	signInWithPopup(auth, provider)
		.then((result) => {
			navigateTo({ path: "/user" });
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error.customData.email;
			const credential = GoogleAuthProvider.credentialFromError(error);
			console.log(errorCode, errorMessage, email, credential);
		});
}
</script>