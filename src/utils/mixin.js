import router from '../router.js'

export const _router = {
  methods: {
    $_push({path, name, query, params}){
      router.push({path, name, query, params})
    }
  }
}
