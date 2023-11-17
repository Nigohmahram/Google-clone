import { Link } from '@material-ui/core';
import React from 'react';
import './Home.css';
import './SearchPage.css';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

const SearchPage = () => {
	return (
		<div className='searchPage'>
			<div className='searchPage__header'>
				<Link to='/'>
					<img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt='google_logo' />
				</Link>
				<div className='searchPage__headerBody'>
					<form className='search'>
						<div className='search__input'>
							<SearchIcon className='searchIcon' />
							<input type='text' />
							<KeyboardHideIcon className='keyboard' />
							<MicIcon className='microfon' />
							<AddAPhotoIcon className='photo' />
						</div>
					</form>

					<div className='searchPage__option'>
						<SearchIcon />
						<Link to='/all'>All</Link>
					</div>
					<div className='searchPage__option'>
						<OndemandVideoIcon />
						<Link to='/all'>Videos</Link>
					</div>

					<div className='searchPage__option'>
						<ImageIcon />
						<Link to='/all'>Image</Link>
					</div>

					<div className='searchPage__option'>
						<LocalOfferIcon />
						<Link to='/all'>Shopping</Link>
					</div>

					<div className='searchPage__option'>
						<DescriptionIcon />
						<Link to='/all'>News</Link>
					</div>
					<div className='searchPage__option'>
						<RoomIcon />
						<Link to='/all'>Maps</Link>
					</div>
					<div className='searchPage__option'>
						<MoreVertIcon />
						<Link to='/all'>More</Link>
					</div>
				</div>
				<div className='searchPage__optionsLeft'>
					<div className='searchPage__option'>
						<Link to='/settings'>Settings</Link>
					</div>
					<div className='searchPage__option'>
						<Link to='/settings'>Tools</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPage;
