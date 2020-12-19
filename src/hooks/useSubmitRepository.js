const useSubmitRepository = () => {

  const onSubmit = (e) => {
    e.preventDefault()
    const repositoryUrl = e.target.url.value

    console.log({ repositoryUrl })
  }

  return {
    onSubmit,
  }
}

export default useSubmitRepository
