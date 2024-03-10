<template>
    <q-card class="my-card">
      <q-card-section class="bg-transparent text-black" style="display: flex;">
        <div class="icon-circle" :style="{backgroundColor: bgColor }">
            <q-icon size="24px" :name="logo" ></q-icon>
        </div>
        <div style="padding: 0% 4% 0% 4%; width: -webkit-fill-available;">
           <a style="font-weight: 600;">  {{transactionName}}</a>
           <br>
           <a style="opacity:0.8; color: #AAAAAA;">{{date}}</a>
           <br>
           <div style="display: flex;">
            <div class="icon-circle-card">
                    <q-icon size="16px" name="credit_card" style="color: white;"></q-icon>
            </div>
            <p style="color: #325BAF; font-size: 14px; font-weight: 600;">{{ remarks }}</p>
        </div>
        </div>
        <div style="margin-left: auto;">
           <a :style="{color: Number(amount)>0? '#01D167': 'black'}"  >  ${{amount}}</a>
        </div>
      </q-card-section>

      <q-separator />
    </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'transactionComponent',
  props: {
    logo: {
      type: String,
      required: true
    },
    transactionName: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    remarks: {
      type: String,
      required: true
    },
    amount: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    
  },
});
</script>
<style>
.icon-circle {
 display: inline-flex;
 align-items: center;
 justify-content: center;
 width: 40px; 
 height: 40px;
 border-radius: 50%;
 background-color: #f0f0f0;
}
.icon-circle-card {
 display: inline-flex;
 align-items: center;
 justify-content: center;
 width: 24px; 
 height: 24px;
 border-radius: 50%;
 background-color: #325BAF;
 margin-right: 2%;
}
</style>