<template>
    <div class="login max-w-96 m-auto mt-10">
                <h1 class="text-2xl text-center" >Welcome back!</h1>
                <p class=" mb-8 text-center">Create your account</p>
                <UForm :schema="schema" :state="state" class="flex flex-col justify-between" @submit="SignInWithEmail">
                    <UFormGroup class="min-h-24" label="Email" name="email">
                        <UInput v-model="state.email" />
                    </UFormGroup>

                    <UFormGroup class="min-h-24" label="Password" name="password">
                        <UInput v-model="state.password" type="password" />
                    </UFormGroup>
                        <UButton :loading="state.loading" block size="xl" type="submit">Login</UButton>
                </UForm>
            <UDivider class="py-4" label="OR" orientation="horizontal" />
            <div class="space-y-4 flex flex-col justify-center">
                <GoogleSignIn/>
            </div>
            <div class="mt-4 flex flex-row justify-center items-baseline">
                <span>Don't have an account?</span>
                <UButton class="ml-2" size="xl" color="cyan" variant="ghost" to="/register">Register</UButton>
            </div>
    </div>

</template>
<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined,
  loading: false
})

const auth = getAuth()
async function SignInWithEmail (event: FormSubmitEvent<Schema>) {
    state.loading = true
    signInWithEmailAndPassword(auth, event.data.email, event.data.password)
    .then((userCredential) => {
        state.loading = false
        navigateTo({path: '/user'})
    })
    .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
    })
}
</script>
