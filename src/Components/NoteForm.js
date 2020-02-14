import React from 'react'
import { Grid, Form } from 'semantic-ui-react'


const NoteForm = () => {
    return (
        <Grid.Column width={10}>
            <Form>
                <Form.Input 
                    fluid label='Title' 
                    placeholder='my first note!'
                    value='null' 
                />
                <Form.TextArea label='Content' placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' />
                <Form.Input fluid label='Tags!' placeholder='Tag1, Tag2, Tag3, ...' />
                <Form.Button>Save</Form.Button>
            </Form>
        </Grid.Column>
    )
}

// class NoteForm extends React.Component {


//     render () {
//         return(
//             chosenNote ? chosenNote : form()
//         )
//     }
// }




const NewNote = () => {
  return (
    <Grid>
        <Grid.Column width={3}>

        </Grid.Column>

        <NoteForm />

    </Grid>
  )   
}

export {
  NoteForm,
  NewNote  
} 
