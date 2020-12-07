const createMarkup = data => ({
  __html: data,
})

const Html = ({ children, className, ...props }) => (
  <div
    className={className}
    dangerouslySetInnerHTML={createMarkup(children)}
    {...props}
  />
)

export default Html
