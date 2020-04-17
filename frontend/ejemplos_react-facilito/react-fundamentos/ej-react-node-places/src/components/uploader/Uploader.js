import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Uploader extends Component {
   
    constructor(props){
        super(props);
        this.state = { file: { name: '' } }

        this.fileInput = React.createRef();
        this.openInput = this.openInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

   openInput(){
      this.fileInput.current.click();
   }

   handleFile(e){
      let file = e.target.files[0];
      if(!file) return;

      this.setState({
         file: file
      })
      //archivo a componente padre
      this.props.getFile(this.props.type, file);
   }

    render() {
        return (
         <div>
            <input 
            type="file" 
            ref={this.fileInput} 
            onChange={this.handleFile}
            style={{'display':'none'}}
            />
            <span style={{'marginRight':'0.5em'}} > {this.state.file.name} </span>
            <Button variant="contained" color="primary" onClick={this.openInput}>
            {this.props.label}
            </Button>
         </div>  
        )
    }
}
