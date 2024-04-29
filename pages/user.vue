<template>
    <div>
        <p>Hello {{ user?.displayName }}</p>
    </div>
    <UTable :rows="privateGears" :columns="columns">
    <template #picture_url-data="{ row }">
        <img :src="row.picture_url" alt="">
    </template>
    <template #weight-data="{ row }">
        <p>{{ get_display_weight(row.weight).toFixed(2)}} {{ prefered_unit }}</p>
    </template>
    </UTable>

    <ul>
    <li v-for="gear in gears" :key="gear.id">
      <span>{{ gear.name }}</span>
    </li>
  </ul>
</template>
<script setup>
import { collection } from 'firebase/firestore'

definePageMeta({
  middleware: ['auth'],
})
const user = useCurrentUser()
console.log(user.value?.uid)
// Query a reference 
const db = useFirestore()
const privateGears = useCollection(collection(db, 'Users', user?.value.uid, 'PrivateGears'))
const gears = useCollection(collection(db, 'Gears'))

const columns = [{
  key: 'picture_url',
  label: 'Photo'
}, {
  key: 'brand',
  label: 'Brand'
}, {
  key: 'name',
  label: 'Product Name'
}, {
  key: 'category',
  label: 'Category'
}, {
  key: 'weight',
  label: 'Weight'
}]

const prefered_unit ='g'

const get_display_weight = (gram_weight)=>{
    if (prefered_unit ==='g'){
        return gram_weight
    }
    else if (prefered_unit ==='oz'){
        return gram_weight * 0.035274
    }
}

</script>