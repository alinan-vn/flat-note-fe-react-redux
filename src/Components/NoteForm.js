import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NoteForm extends React.Component {



    renderForm = () => {
        if (this.props.currentNote) {
            return (
                <Form>
                    <Form.Input 
                        fluid label='Title' 
                        placeholder='my first note!'
                        value={ this.props.currentNote[0].title } 
                    />
                    <Form.TextArea 
                        label='Content' 
                        placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' 
                        value = { this.props.currentNote[0].content }
                    />
                    <Form.Input 
                        fluid label='Tags!' 
                        placeholder='Tag1, Tag2, Tag3, ...' 
                        value = { this.props.currentNote[0].tags }
                    />
                    <Form.Button>Save</Form.Button>
                </Form>
            ) 
        }
        else {
            return (
                <Form>
                    <Form.Input 
                        fluid label='Title' 
                        placeholder='my first note!'
                    />
                    <Form.TextArea 
                        label='Content' 
                        placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' 
                    />
                    <Form.Input fluid label='Tags!' placeholder='Tag1, Tag2, Tag3, ...' />
                    <Form.Button>Save</Form.Button>
                </Form>
            )
        }
    }

  

    render () {
        return(
            <Grid.Column width={10}>
                { this.props.currentNote ? 
                    console.log('new note', this.props.currentNote[0].title) 
                    : 
                    console.log('nothing yet')
                }
                
                { this.renderForm() }

            </Grid.Column>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }

}

export default connect(mapStateToProps)(NoteForm)
