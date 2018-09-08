const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

 describe("Topic", () => {
   beforeEach((done) => {
    this.topic;
    sequelize.sync({force: true}).then((res) => {
      Topic.create({
        title: "JS Frameworks",
        description: "There is a lot of them"
      })
      .then((topic) => {
        this.topic = topic;
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });
  
   describe("#create()", () => {
     it("should create a topic object with a title and description", (done) => {
       Topic.create({
         title: "JS Frameworks",
         description: "There is a lot of them"
       })
       .then((topic) => {
         expect(topic.title).toBe("JS Frameworks");
         expect(topic.description).toBe("There is a lot of them");
         done();
       })
       .catch((err) => {
         console.log(err);
         done();
       });
     });
     it("should not create a post with missing title or description", (done) => {
     Topic.create({
       title: "JS Frameworks",
       description: "There is a lot of them"
     })
     .then((post) => {
       done();
     })
     .catch((err) => {
       expect(err.message).toContain("Topic.body cannot be null");
       expect(err.message).toContain("Topic.description cannot be null");
       done();
     })
   });
   });

 	describe("#getPosts()", () => {
		it("should return the associated post", (done) => {
		    Post.create({
		      title: "Pros of Cryosleep during the long journey",
		      body: "1. Not having to answer the 'are we there yet?' question.",
		      topicId: this.topic.id
		    })
		    .then((associatedPost) => {
		      expect(associatedPost.title).toBe("Pros of Cryosleep during the long journey");
		      done();
		    })
		    .catch((err) => {
		      console.log(err);
		      done();
		    });
		})
	})
 });
