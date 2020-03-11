import React, { Component } from 'react'
import ProfileServices from '../../../services/profile.services'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./profile-module.css"

class Profile extends Component {
constructor(props) {
  super(props)
  this.state = {
    user: {
      title: '',
      description: '',
      length: '',
      inversions: '',
      imageUrl: ''
    },
  }
  this.profileServices = new ProfileServices()
}


handleFileUpload = e => {
  const uploadData = new FormData()
  uploadData.append("imageUrl", e.target.files[0])
  this.filesServices.handleUpload(uploadData)
    .then(response => {
      this.setState({
        user: { ...this.state.user, imageUrl: response.secure_url }
      })
    })
    .catch(err => console.log(err))
}



render(){
  return(
<div>
<h1>Soy el perfil y tal :3, {this.props.loggedInUser.username}</h1>
{<img src={this.state.imageUrl} alt={this.props.loggedInUser.username}/>}
<Form>
    <Form.Group>
      <Form.Label>Imagen</Form.Label>
      <Form.Control type="file" name="imageUrl" onChange={this.handleFileUpload} />
    </Form.Group>

    <Button variant="dark" type="submit">subir foto</Button>
            </Form>
  </div>

)
}
}

export default Profile
  