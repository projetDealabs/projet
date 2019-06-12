<template>
    <div class="comments-element">
        <div class="comment-header">
            <!--<img class="comment-pic" src="">-->
            <span class="comment-author"><b>{{ author }}</b> <small>le {{ date }}</small></span>
        </div>
        <div class="comment-content">
            <p>{{ message }}</p>
        </div>
        <!--<CommentVotes></CommentVotes>-->
    </div>
</template>

<script>
const qs = require('qs')


export default {
    props: ['commentData'],
    /*components: {
        CommentVotes,
        CommentAnswer
    },*/
    mounted: function() {
        console.log(this.commentData);
        this.$data.author = this.commentData.username;
        this.$data.message = this.commentData.contenu;
        this.$data.date = this.commentData.date;
        //this.$data.commentID = this.idComment;
        //this.getCommentData(this.$data.commentID);
    },
    methods: {
        
    },
        data: function () {
            return {
                commentID: null,
                author: null,
                date: null,
                message: null
            }

        }
}
</script>

<style>
.comment-header .comment-author {
  margin:0;
  padding-top: 5px;
  font-size: 20px;
}

.comment-content {
    font-size:18px;
    padding-left: 50px;
}

.comment-content p {
    margin-top:5px;
}

.comment-pic {
    height: 60px;
    width: 60px;
    object-fit: cover;
    border-radius: 100%;
    float: left;
    margin-right: 15px;
}

.comments-element {
    margin-top:20px;
}
</style>

