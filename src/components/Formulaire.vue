<template>
    <b-modal id="formulaire" title="formulaire">
        <b-form-group
        id="form-firstname"
        label="First Name"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.firstname" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-lastname"
        label="Last Name"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.lastname" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-gender"
        label="Gender"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.gender" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-phone"
        label="Phone"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.contact.phone" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-email"
        label="Email"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.contact.email" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-city"
        label="City"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.contact.city" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-address"
        label="Address"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.contact.address" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-favorite-pet"
        label="Favorite Pet"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.preferences.favorite_pet" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-favorite-color"
        label="Favorite Color"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.preferences.favorite_color" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-favorite-fruit"
        label="Favorite Fruit"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.preferences.favorite_fruit" :state="state" trim></b-form-input>
        </b-form-group>

        <b-form-group
        id="form-favorite-movie"
        label="Favorite Movie"
        label-for="input-1"
        :invalid-feedback="invalidFeedback"
        :state="state"
        >
        <b-form-input id="input-1" v-model="selectionPersonne.preferences.favorite_movie" :state="state" trim></b-form-input>
        </b-form-group>
  </b-modal>
</template>

<script>
export default {
  name: 'formulaire',
  props: {
    selectionPersonne: Object
  }
}
</script>
