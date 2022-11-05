import Button from "../button/button"
import Input from "../input/input"
import SectionTitle from "../section-title/sectionTitle"

export const AddTodo = ({ value, setValue, handleSubmit }) => {



  return (
    <>
      <SectionTitle>
        Add Todo
      </SectionTitle>

      <form className="d-flex" onSubmit={handleSubmit}>
        <Input setValue={setValue} value={value} />
        <Button>
          Add
        </Button>
      </form>

    </>
  )
}