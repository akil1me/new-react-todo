import Button from "../button/button"
import Input from "../input/input"
import SectionTitle from "../section-title/sectionTitle"

export const AddTodo = ({ inputRef, handleSubmit }) => {



  return (
    <>
      <SectionTitle>
        Add Todo
      </SectionTitle>

      <form className="d-flex" onSubmit={handleSubmit}>
        <Input inputRef={inputRef} />
        <Button>
          Add
        </Button>
      </form>

    </>
  )
}