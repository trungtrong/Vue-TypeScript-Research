<template>
  <div></div>
</template>

<script lang='ts'>
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import { mapState, mapGetters, mapActions } from "vuex";

  // import { PropertyAPI } from '@/api/search-property'
  @Component({
    // import components
    // components: {},

    // template: '<div></div>'
  })

  export default class PropertyDetail extends Vue {

      constructor() {
        super()
      }

      // @input
      @Prop() propertyId: number;
      // private properties
      propertyDetails: any;

      // Life cycle hooks
      mounted() {
        this.getPropertyDetails(5018);
      }

      // methods
      async getPropertyDetails(listingId: number) {
        // let result = await this.propertyAPI.getPropertyDetails(listingId);
        let result = {
          status: 200,
          data: {
            isSuccess: true,
            result: {
              lat: 1,
              lng: 1
            }
          },
        };
        console.log('detail::',result)
        if (result.status === 200) {
            const response = result.data;
            if (response.isSuccess) {
                this.propertyDetails = response.result;
                const position = {lat: response.result.lat, lng: response.result.lng};
            }
        }
      }
  }
</script>

<style lang="scss" scoped>
</style>


