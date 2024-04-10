
import { useState } from 'react';
import './TagsInput.css'


const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};

  return (
      <div className="tags-input">
        <input
          className='taginputbox'
          type="text"
          onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
          placeholder="Press enter to add tags"
        />
        <ul id="tags">
          {tags.map((tag, index) => (
            <li onClick={() => removeTags(index)} key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'>
                x
              </span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TagsInput;