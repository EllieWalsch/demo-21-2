import ProfileController from "../profile/index.js";
import ThoughtController from "../thought/index.js";

const resolvers = {
  Query: {
    async profiles() {
      return await ProfileController.index();
    },
    async profile(_, { id }) {
      return await ProfileController.show(id);
    },
    async thoughts() {
      return await ThoughtController.index();
    },
    async thought(_, { id }) {
      return await ThoughtController.show(id);
    },
  },
  Mutation: {
    async createProfile(_, { name }) {
      return await ProfileController.create(name);
    },
    async addSkill2Profile(_, { id, skill }) {
      return await ProfileController.addSkill(id, skill);
    },
    async removeSkillFromProfile(_, { id, skill }) {
      return await ProfileController.removeSkill(id, skill);
    },
    async deleteProfile(_, { id }) {
      return await ProfileController.delete(id);
    },
    async createThought(_, { thoughtText, thoughtAuthor }) {
      return await ThoughtController.create(thoughtText, thoughtAuthor);
    },
    async addComment2Thought(_, { id, commentText }) {
      return await ThoughtController.addComment(id, commentText);
    },
    async deleteCommentFromThought(_, { thoughtId, commentId }) {
      return await ThoughtController.deleteComment(thoughtId, commentId);
    },
    async deleteThought(_, { id }) {
      return await ThoughtController.delete(id);
    },
  },
};

export default resolvers;
