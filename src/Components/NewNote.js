import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'





class NewNote extends React.Component {


    render (){
        return (
            <Grid>
          <Grid.Column width={3}>
          </Grid.Column>
  
          <Grid.Column width={10}>
                <Form>
                    <Form.Input 
                        fluid label='Title' 
                        placeholder='my first note!'
                        // value='null' 
                    />
                    <Form.TextArea label='Content' placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' />
                    <Form.Input fluid label='Tags!' placeholder='Tag1, Tag2, Tag3, ...' />
                    <Form.Button>Save</Form.Button>
                </Form>
            </Grid.Column>
  
      </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }

}

export default connect(mapStateToProps)(NewNote)