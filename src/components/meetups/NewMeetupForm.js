import { useRef } from 'react'
import Card from '../UI/Card'
import classes from './NewMeetupForm.module.css'
function NewMeetupForm(props) {
  const titleInputRef = useRef()
  const imageInputRef = useRef()
  const addressInputRef = useRef()
  const descriptionInputRef = useRef()
  function submitHandler(event) {
    event.preventDefault()
    const enteredTitle = titleInputRef.current.value
    const enteredImgae = imageInputRef.current.value
    const enteredAddress = addressInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value

    const formData = {
      title: enteredTitle,
      image: enteredImgae,
      address: enteredAddress,
      description: enteredDescription,
    }
    props.onAddMeetup(formData)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address' ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            required
            id='description'
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add This Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
