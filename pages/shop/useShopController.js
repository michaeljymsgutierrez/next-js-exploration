function useShopController() {
  function viewPostId(post) {
    window.alert(post.id)
  }

  return { viewPostId }
}

export default useShopController
