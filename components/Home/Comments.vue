<template>
  <div class="comments">
    <h2 class="tit">
      Comments
    </h2>

    <div class="row">
      <div class="col-lg-4">
        <div class="form-layout">
          <form action="">
            <div class="form-input">
              <textarea name="user_comment" id="user_comment" v-model="comment" placeholder="Write your review here...">
              </textarea>
              <div class="emoji">
                <button type="button" v-for="(emoji,index) in emojiConvert(this.emojis)" :key="index" v-html="emoji" v-on:click="emojiSet(emoji)" />
              </div>
            </div>
            <button type="submit" class="btn-default">Submit</button>
          </form>
        </div>
      </div>
      <div class="col-lg-8">
        Col 8
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Comments",

    data() {
      return {
        comment: null,
        emojis: [
          '1F615',
          '1F60D',
          '1F612',
          '1F618',
          '1F602',
          '1F609',
          '1F601'
        ],
      }
    },

    methods: {
      emojiConvert(emoji) {
        let result = [];
        emoji.forEach(element => {
          result.push(`&#x${element}`)
        });
        return result
      },
      emojiSet(emoji) {
        this.comment += emoji;
      }
    },
  }
</script>

<style lang="scss">
  @import '~/assets/scss/components/comments.scss';
</style>