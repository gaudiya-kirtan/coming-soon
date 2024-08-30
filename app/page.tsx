const Home = () => {

  return (
    <div className="min-h-screen bg-[#181819] flex flex-col items-center justify-center text-white px-4">
      <div className="text-center max-w-lg w-full">
        <img src="/gklogo+text.png" alt="Gaudiya Kirtan Logo" className="h-72 mx-auto m-2" />
        <p className="text-lg text-[#89b1f4]">Web and mobile app coming soon!</p>

        <div id="mc_embed_signup" className='my-8'>
          <form
            action="https://gaudiyakirtan.us9.list-manage.com/subscribe/post?u=c2eb8297f63f54e82a96c8f56&id=25c68ece6a"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <label id="subscribeLabel" htmlFor="mce-EMAIL" className="text-base text-[#858585]">
              Sign up to the Gaudiya Kirtan mailing list to get notified when the upcoming app is released and to receive special songs to sing for various festival days throughout the year.
            </label>
            <div className='flex flex-row items-center m-4 space-x-2 content-center'>
              <input
                id="subscribeInput"
                type="email"
                name="EMAIL"
                className="p-2 rounded-lg m-auto w-full text-white bg-[#282829] border-[#383839] email"
                placeholder="Enter your email"
                required
              />
              <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                <input
                  type="text"
                  name="b_c2eb8297f63f54e82a96c8f56_25c68ece6a"
                  tabIndex="-1"
                  value=""
                  readOnly
                />
              </div>
              <div className="clear">
                <input
                  id="subscribeButton"
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  className="button bg-white text-[#181819] hover:opacity-75 rounded-lg h-full whitespace-nowrap py-2 m-auto px-4"
                />
              </div>
            </div>
          </form>
        </div>

        <p className="my-4 text-[#858585]">Download the current version</p>
        <div className="flex justify-center space-x-4 mb-8">
          <a href="https://play.google.com/store/apps/details?id=com.gaudiyakirtan.gkapp" target="_blank" rel="noopener noreferrer">
            <img src="/googleplay.png" alt="Google Play" className="h-12 opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a href="https://apps.apple.com/us/app/gaudiya-kirtan/id1502107221" target="_blank" rel="noopener noreferrer">
            <img src="/appstore.png" alt="App Store" className="h-12 opacity-75 hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        <div className="max-w-md mx-auto">
          <p className="italic text-sm text-[#858585]">
            "Kīrtana is the sole fruit of kīrtana. Kīrtana alone is sevā, and kīrtana is also prema."
          </p>
          <p className="text-xs mt-2 text-[#858585]">-- Śrīla Bhakti Prajñāna Keśava Gosvāmī Mahārāja</p>
        </div>
      </div>
    </div>
  );
};

export default Home;