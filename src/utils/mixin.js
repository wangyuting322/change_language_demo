import ch from '../utils/ch.js';
import en from '../utils/en.js';
export default {
    data() {
        return {
            languageContent: {}
        }
    },
    methods: {
        handleChange() {
            this.$store.commit('changeLanguage');
        }
    },
    computed: {
        language() {
            return this.$store.state.language;
        }
    },
    watch: {
        language: {
            handler(newVal) {
                if (newVal === 'ch') {
                    this.languageContent = { ...ch };
                } else {
                    this.languageContent = { ...en };
                }
            },
            immediate: true,
        }
    }



}