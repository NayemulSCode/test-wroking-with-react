import React,{useState} from 'react'
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';


const Emoji = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmojiBox, setOpenEmojiBox] = useState(false)
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject.emoji)
  };
    return (
        <div>
            <button onClick={e=> setOpenEmojiBox(!openEmojiBox)}>Emoji picker</button>
            {chosenEmoji ? (
                <span>You chose: {chosenEmoji.emoji}</span>
            ) : (
                <span>No emoji Chosen</span>
            )}
            {
                openEmojiBox&&
                <Picker 
                    onEmojiClick={onEmojiClick}  
                    skinTone={SKIN_TONE_MEDIUM_DARK}
                    pickerStyle={{ width: '20%', height: '200px'}}
                />
            }
        </div>
    )
}

export default Emoji
