import React, {Component} from 'react';
import Emoji from './Emoji';
import {emojis, relation} from './emojis';

export default class EmojiPicker extends Component{

   constructor(props){
      super(props);
      this.state = {
         emojis
      }

      this.emojiSelected = this.emojiSelected.bind(this);
   }

   buildEmojis(){
      return this.state.emojis.map(short_code => <Emoji onClick={this.emojiSelected} code={short_code} key={short_code} />)
   }

   emojiSelected(code){
      const reaction = relation[code];

      const emojisReordered = [code].concat(emojis.filter(el => el !== code));

      this.props.onSelect(reaction);

      this.setState({
         emojis: emojisReordered
      })
   }

   render(){
      return(
         <div>
            <ul className="Emoji-picker">
               {this.buildEmojis()}
            </ul>
         </div>
      );
   }
}