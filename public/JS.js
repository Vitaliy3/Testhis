      new Vue({
        el: '#app6',
        data: {
          loc: 'hm1'
        },
        methods: {
          show: function (obj) {
            if (obj == "hm1") {
              this.loc = 'hm1';
            } else if (obj == "hm2") {
              this.loc = 'hm2';
            } else if (obj == "hm3") {
              this.loc = 'hm3';
            }
            console.log(this.loc);
            return this.loc;
          }
        }
      })