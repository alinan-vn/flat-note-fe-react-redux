import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'

class NewNote extends React.Component {
    constructor(){
        super()
        this.state = {
            title: undefined,
            content: undefined,
            tags: undefined
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
        console.log('are inputs changin?', this.state)
    }

    render (){
        return (
            <Grid>
          <Grid.Column width={3}>
          </Grid.Column>
  
          <Grid.Column width={10}>
                <Form>
                    <Form.Input 
                        fluid label='Title' 
                        id='title'
                        placeholder='my first note!'
                        value = {this.state.title}
                        onChange={this.handleInputChange}
                    />
                    <Form.TextArea 
                        label='Content' placeholder='Wow! This really is amazing! I wish someone had thought of making a note maker sooner!' 
                        id='content'
                        value = {this.state.content}
                        onChange={this.handleInputChange}
                    />
                    <Form.Input 
                        fluid label='Tags!' 
                        id='tags'
                        placeholder='Tag1, Tag2, Tag3, ...' 
                        value = {this.state.tags}
                        onChange={this.handleInputChange}
                    />
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