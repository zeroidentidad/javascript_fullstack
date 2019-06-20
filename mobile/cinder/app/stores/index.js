import ConfigStore from './config.store';
import AuthStore from './auth.store';
import MatchStore from './match.store';
import PostStore from './post.store'

const config = new ConfigStore()
const auth = new AuthStore()
const matches = new MatchStore()
const posts = new PostStore()

export default { config, auth, matches, posts }