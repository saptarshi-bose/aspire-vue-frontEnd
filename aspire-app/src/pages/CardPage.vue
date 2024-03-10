<template>
  <div class="card-main">
    <q-item-label>Available Balance:</q-item-label>
    <div style="display: flex; justify-content:space-between;">
    <div style="display: flex;">
      <q-chip square color="primary">
        S$
      </q-chip>
      <p style="font-weight: 800; font-size:24px; margin-left: 4%;">3,000</p></div>
    <q-btn @click="prompt()" style="background-color:#325BAF; color: white;height: min-content;" icon="add_circle" label="New Card" />
    </div>
      <div class="q-gutter-y-md" style="padding-top: 2%;">
        <q-tabs
          v-model="tab"
          dense
          class="bg-transparent text-black"
          active-color="primary"
          align="left"
        >
          <q-tab name="mails" label="My Debit Cards" />
          <q-tab name="alarms" label="All Company Cards" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <div style="display: flex;justify-content:space-evenly; border-radius: 8px;" class="shadow-1">
              <div class="padding" style="width: 100%;">
                <q-carousel
                v-model="selectedCard"
                swipeable
                animated
                control-color="primary"
                navigation
                class="rounded-borders"
                >
                    <cardComponent v-for="(card, index) in cards" :name="card.id" :card-name="card.cardName" :card-number="card.cardNumber" :freezeStatus="card.freezeStatus"  v-bind:key="index"></cardComponent>
                </q-carousel>
                <q-card class="my-card" style="margin: 0% 12% 8% 12%;background-color: #EDF3FF;justify-content: space-evenly;" >
                  <q-card-section style="display: flex; justify-content:space-evenly">
                    <actionComponent v-for="(action,index) in actions" :data="action" v-bind:key="index" :clickHandler="() => handleActionClick(action.handler)" ></actionComponent>
                  </q-card-section>
                </q-card>
              </div>
              <div style="width: 72%;">
                <div class="q-pa-md">

                  <q-expansion-item
                    icon="img:/icons/card-details.svg"
                    label="Card Details"
                    class="shadow-1 overflow-hidden"
                    style="border-radius: 8px; margin-bottom: 12%;background-color: #F5F9FF;"
                    expand-icon="img:/icons/up-arrow .svg"
                    expanded-icon="img:/icons/down-arrow.svg"
                  >
                    <q-card>
                      <q-card-section>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                        commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                        eveniet doloribus ullam aliquid.
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-expansion-item
                    icon="img:/icons/recent-transactions.svg"
                    label="Recent Transactions"
                    class="shadow-1 overflow-hidden"
                    expand-icon="img:/icons/up-arrow .svg"
                    expanded-icon="img:/icons/down-arrow.svg"
                    style="border-radius: 8px; background-color: #F5F9FF;"
                    default-opened
                  >
                    <transactionComponent v-for="(transaction,index) in transactions" :logo="transaction.logo" :amount="transaction.amount" :date="transaction.date" :remarks="transaction.remarks" :transaction-name="transaction.transactionName" :bg-color="transaction.bgColor" v-bind:key="index" ></transactionComponent>
                    <q-card class="my-card">
                      <q-card-section  style="display: flex; justify-content: center; background-color: #EDFFF5;">
                        <q-btn flat color="primary" label="View All Card Transactions"></q-btn>
                      </q-card-section>
                      <q-separator />
                    </q-card>
                  </q-expansion-item>
                </div>
              </div>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import cardComponent  from 'components/CardComponent.vue'
import actionComponent  from 'components/ActionComponent.vue'
import transactionComponent  from 'components/TransactionComponent.vue'
import { useQuasar } from 'quasar'
import { Card } from 'src/components/models'
let localCard = localStorage.getItem('cards');

export default {
  setup () {
    const $q = useQuasar();
    let cards = ref<Array<Card>>([
        {
          id: 0,
          cardName: 'Mark Henry',
          cardNumber: '2123234312332020',
          cvv: '456',
          expiry:'12/20',
          freezeStatus: false
        },
        {
          id: 1,
          cardName: 'Harry Louis',
          cardNumber: '5463223572334567',
          cvv: '456',
          expiry: '12/20',
          freezeStatus: true
        }
      ]);
      if(localCard) cards.value = JSON.parse(localCard) as Array<Card>;
    const transactions = [
        {
          transactionName:'Hamleys',
          date: '20 May 2020',
          remarks:'refund on debit card',
          logo:'inventory_2',
          amount:'1.25',
          bgColor: '#009DFF1A'
        },
        {
          transactionName:'Hamleys',
          date: '20 May 2020',
          remarks:'charged to debit card',
          logo:'flight',
          amount:'-11.25',
          bgColor: '#00D6B51A'
        },
        {
          transactionName:'Hamleys',
          date: '20 May 2020',
          remarks:'charged to debit card',
          logo:'campaign',
          amount:'3.25',
          bgColor: '#F251951A'
        },
        {
          transactionName:'Hamleys',
          date: '20 May 2020',
          remarks:'charged to debit card',
          logo:'inventory_2',
          amount:'-2.25',
          bgColor: '#009DFF1A'
        },
      ];
    return {
      showNotif(message: string){
        $q.notify(message)
      },
      tab: ref('mails'),
      newData: ref({}),
      selectedCard: ref(0),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      actions:[
        {
          title: 'Freeze Card',
          logo: '/icons/Freeze card.svg',
          handler: 'toggleFreeze'
        },
        {
          title: 'Set spend limit',
          logo: '/icons/Set spend limit.svg',
          handler: 'defaultActionClicked'
        },
        {
          title: 'Add to GPay',
          logo: '/icons/GPay.svg',
          handler: 'defaultActionClicked'
        },
        {
          title: 'Replace Card',
          logo: '/icons/Replace card.svg',
          handler: 'defaultActionClicked'
        },
        {
          title: 'Cancel Card',
          logo: '/icons/Deactivate card.svg',
          handler: 'defaultActionClicked'
        }
      ],
      cards,
      transactions,
      prompt () {
        $q.dialog({
          title: 'Add a New Card',
          message: 'Enter Name on the Card? (Minimum 3 characters)',
          prompt: {
            model: '',
            isValid: val => val.length > 2, // << here is the magic
            type: 'text' // optional
          },
          cancel: true,
          persistent: true
        }).onOk(data => {
          cards.value.push({
            id: cards.value.length,
            cardName: data,
            cardNumber:Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(),
            cvv: '455',
            expiry: '12/22',
            freezeStatus: false
          });
          localStorage.setItem('cards', JSON.stringify(cards.value));
        })
      },
    }
  },
  methods:{
    handleActionClick(handler: string){
      if(handler == 'toggleFreeze'){
        this.cards.forEach((card) => {
          if(card.id == this.selectedCard) card.freezeStatus = !card.freezeStatus
        });
        localStorage.setItem('cards', JSON.stringify(this.cards));
        this.showNotif('Card Freeze status changed')
      }
      else this.showNotif(handler + ' clicked')
    },
  },
  components:{
    cardComponent,
    actionComponent,
    transactionComponent
  }
}
</script>
<style lang="scss">
.card-main{
  padding: 6% 4% 4% 4%;
}
</style>
