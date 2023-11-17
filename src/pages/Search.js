import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';

const Search = () => {
	return (
		<form className='search'>
			<div className='search__input'>
				<SearchIcon className='searchIcon' />
				<input type='text' />

				<KeyboardHideIcon className='keyboard' />
				<MicIcon className='microfon' />
				<AddAPhotoIcon className='photo' />
			</div>

			<div className='search__buttons'>
				<button type='submit' variant='outlined'>
					Google Search
				</button>
				<button variant='outlined'>I'am Feeling Lucy</button>
			</div>
		</form>
	);
};

export default Search;
