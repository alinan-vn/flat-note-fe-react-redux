import React from 'react'
import { Grid, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { changeNote } from '../Actions/NoteActions'

class NoteForm extends React.Component {

    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            tags: ''
        }
    }
    

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    renderForm = () => {
        if (this.props.currentNote){
            this.setState({
                title: this.props.currentNote.title,
                content: this.props.currentNote.content,
                tags: this.props.currentNote.tags
            })
            this.props.changeNote([null])

        }
        return (
            <Form>
                <Form.Input 
                    fluid label='Title'
                    id='title'
                    placeholder='title will be rendered here to edit!'
                    value={ this.state.title }
                    onChange={this.handleInputChange}
                />
                <Form.TextArea 
                    label='Content' 
                    id='content'
                    placeholder='I bet you can guess what will be rendered in the content section ;)'
                    value={ this.state.content } 
                    onChange={this.handleInputChange}
                />
                <Form.Input 
                    fluid label='Tags!'
                    id='tags'
                    placeholder='actually, tags wont be rendered here... will they?'     
                    value={ this.state.tags }
                    onChange={this.handleInputChange}
                />
                
                <Form.Button>Save</Form.Button>
                <Form.Button>Delete</Form.Button>

            </Form>
        )
    }

  

    render () {
        return(
            <Grid.Column width={10}>
                
                { this.renderForm() }

            </Grid.Column>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeNote: (note) => {
            dispatch(changeNote(note))
        }
    }
}


const mapStateToProps = (state) => {
    return {
        currentNote: state.currentNote
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
