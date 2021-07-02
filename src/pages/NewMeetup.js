import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
  function addMeetupHandler(formData) {
    fetch(
      'https://react-meet-up-1d80b-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetupPage
