import useSubmitRepository from 'hooks/useSubmitRepository'

const Submit = () => {
  const { onSubmit } = useSubmitRepository()

  return (
    <div className="add-repository">
      <h1>Submit repository</h1>
      <form action="" className="form" onSubmit={onSubmit}>
        <input
          type="text"
          id="url"
          className="input"
          placeholder="https://github.com/username/repository"
        />
        <button className="button">submit</button>
      </form>
    </div>
  )
}

export default Submit
