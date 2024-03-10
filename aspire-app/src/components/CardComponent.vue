<template>
    <div style="padding: 2% 12% 0% 12%; height: 100%;">
        <q-btn flat icon="visibility" rounded color="primary" label="Show Card Details" @click="showNumberClick()" style="font-weight: 800;" />
        <q-carousel-slide style="min-height: max-content;">
            <q-card class="bg-primary text-white" style="aspect-ratio: 16 / 9;border-radius: 12px;" :style="{opacity : freezeStatus? '0.5': '1'}">
                <q-card-media overlay-position="full">
                    <div class="watermark" v-if="freezeStatus">
                        <!-- Use text as a watermark -->
                        <span>Card Freezed</span>
                    </div>
                    </q-card-media>
        <q-card-section>
            <img src="/icons/Aspire_white.svg" style="float: right;" />
            <div class="text-h5" style="margin-top: 12%;margin-bottom: 4%;font-weight: 600;">{{ cardName }}</div>
            <div v-if="!showNumber">
            <a v-for="n in 3" :key="n">
                <q-icon name="circle"></q-icon>
                <q-icon name="circle"></q-icon>
                <q-icon name="circle"></q-icon>
                <q-icon name="circle" style="margin-right: 4%;"></q-icon>
            </a>
            <a style="font-size: 16px;">{{ cardNumber.substr(-4) }}</a>
            </div>
            <div v-else>
                <a v-for="(n,index) in cardNumber" :key="n" style="font-size: 20px;" :style="{ marginRight: (index+1)%4 == 0? '4%' : 'none' }">
                    {{ n }}
            </a>
            </div>
            <p style="padding-top: 4%;">Thru: 12/20  <a style="margin-left:12%;">cvv: </a></p>
            <img src="/icons/visa.svg" style="float: right;padding-bottom: 4%;" />
        </q-card-section>
        </q-card>
    </q-carousel-slide>
</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'cardComponent',
  props: {
    cardName: {
      type: String,
      required: true
    },

    cardNumber: {
      type: String,
      required: true
    },
    freezeStatus: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
        showNumber: false
    }
  },
  methods:{
    showNumberClick(){
        if(this.freezeStatus) return;
        this.showNumber = !this.showNumber;
        console.log(this.showNumber, this.freezeStatus)
    }
  }
});
</script>
<style lang="scss">
.watermark {
 opacity: 1 !important;
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 40px;
 color: #0c365a;
 z-index: 100;
 font-weight: 800;
}
</style>