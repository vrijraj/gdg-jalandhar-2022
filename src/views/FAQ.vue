<template>
  <v-main class="py-md-8 py-0">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col md="11" lg="9">
          <p class="gdg-heading mb-0">
            Frequently asked questions
          </p>
          <p>Need Answers? Everything you need to know</p>
          <v-container fluid class="px-0">
            <v-row align="start" justify="start">
              <v-col md="11" lg="9">
                <v-expansion-panels flat accordion class="">
                  <v-expansion-panel
                    v-for="(faq, i) in faqsData"
                    :key="i"
                    class="px-0 mx-0"
                    style="border-bottom: 1px solid #cddffd; background: white"
                  >
                    <v-expansion-panel-header class="px-0">
                      <p
                        class="google-font"
                        style="font-size: 115%; font-weight: 500; margin: auto;color:#4285f4"
                      >
                        {{ faq.question }}
                      </p>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content class="px-0">
                      <p
                        class=" my-0 ma-0 ml-n6 mt-n1"
                        style="font-size: 100%;color:#616161"
                        v-html="faq.answer"
                      ></p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import data from "../assets/data/FAQ.json";
export default {
  name: "About",
  data: () => ({
    faqsData: data,
  }),
  components: {},
};
</script>
