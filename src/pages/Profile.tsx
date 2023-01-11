import { useEffect, useState, useRef } from "react";
import { fetchUserProfileDdata } from "../functions/fetchProfile";
import "../styles/mypfp.css";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_PROJECTURL,
  import.meta.env.VITE_SUPABASE_PROJECT_ANON_KEY
);
import { Link } from "react-router-dom";
export default function MyProfile() {
  const [username, setusername] = useState("Loading username..."),
    [userBio, setuserBio] = useState("Loading bio...."),
    [userPic, setuserPic] = useState("Loading..."),
    [writeContext, setwriteContxt] = useState("Welcome our dear User 🐱‍🏍");

  const [capsLockMsg, setcapsLockMsg] = useState("");
  const [showCapsToast, setshowCapsToast] = useState(false);
  const [isSliderVisible, setSliderVisibility] = useState(false);
  const isError = useRef(false);

  const obj: any = {
    state1: "Your profile awaits your visitation 🤗",
    state2: "Your profile syncs with our data 🔄",
    state3: "Your profile responsod with our data 🤝",
    state4: "Your profile is editable 📝",
    state5: "Your profile isEffective 👍",
  };
  useEffect(() => {
    fetchUserProfileDdata(setusername, setuserBio);
    let keys = Object.keys(obj);
    let rand = Math.floor(Math.random() * keys.length);
    let randomKey = keys[rand];
    setwriteContxt(obj[randomKey]);
    return () => {
      // second
    };
  }, []);
  const activateSlider = () => {
    setSliderVisibility(true);
  };
  const fileRef: any = useRef();
  const usernameRef: any = useRef();
  const biography: any = useRef();
  const imageDataURL: any = useRef();
  const uploadFileToServer = async () => {
    const file = fileRef.current.files[0];
    /**
     * It's uploading a file to a bucket in my supabase database.
     * @params - .from("uploads") - storageBucket name
     * @params - .upload(`profileImg/${file.name`}, file...) - uploading from a folder profileImg - / adding the name of the file to the uploaded
     * @params - cacheControl, upsert - these are supabase additonal controls
     */
    const { data, error } = await supabase.storage
      .from("uploads")
      .upload(`profileImg/${file.name}`, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (!error) {
      alert("Image Uploaded Sucessfully");
    }
    setTimeout(() => {
      /**
       * I'm trying to download a file from a bucket in my supabase database and store it in a variable
       * called imageDataURL.
       * @params - .from("uploads") - selecting from storageBucket name
       * @params - .download(`profileImg/${file.name}`) - profileImg - the folder, /${file.name} - name of the uploaded file
       */
      async function retrievePublicURLFromBucket() {
        const { data } = supabase.storage
          .from("uploads")
          .getPublicUrl(`profileImg/${file.name}`);
        imageDataURL.current = data;
      }
      retrievePublicURLFromBucket();
    }, 2000);
  };
  const updateUserProfile = async () => {
    /* Checking if the `fileRef` ref has a file in it, if it does, it will set the `isError` ref to
    false and call the `updateProfileWithImage` function. */
    if (fileRef.current.files[0]) {
      isError.current = false;
      await updateProfileWithImage();
    }
    if (!fileRef.current.files[0]) {
      isError.current = true;
    }
    try {
      if (isError.current === true) {
        throw new Error("Error occured during Updating profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  async function updateProfileWithImage() {
    const session: any = localStorage.getItem("auth-session");
    /* Parsing the session object to a JSON object. */
    const parsedSession = JSON.parse(session);
    /* Getting the session key from the parsed session object. */
    const sessionKey = parsedSession.session_key;
    try {
      const response = await fetch(
        `http://localhost:8080/update-profile/${sessionKey}`,
        {
          method: "PUT",
          headers: {
            apikey: import.meta.env.VITE_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: usernameRef.current.value,
            biography: biography.current.value,
            profileImg: imageDataURL.current.publicUrl,
          }),
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
      if (!response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="MyProfile">
      <div id="profileHeader">
        <div id="header-contents">
          <div id="left">
            <span>Welcome,</span> <h4>{username}</h4>
          </div>
          <div id="right">
            <div id="right-links">
              <Link to={"/"}>Home</Link>
              <Link to={"/checkout"}>Checkout</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/blog"}>Blog</Link>
            </div>
            <div id="right-btn">
              <button id="logout-button">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div id="MyProfile-Body">
        <div id="heading">
          <h1>{writeContext}</h1>
        </div>
        <div id="col-render">
          <div id="col-page">
            <div id="contain-profile-picture"></div>
            <div id="contain-profile-username">
              <h2>Hi 👋, {username}</h2>
            </div>
            <div id="contain-profile-summary">
              <p id="user-bio">{userBio}</p>
            </div>
            <div id="contain-button-CTA">
              <button id="delete-account">Delete Account</button>
              <button id="edit-profile" onClick={activateSlider}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id={isSliderVisible ? "edit-box" : "inactive"}>
        <div id="edit-box_header">
          <span>Customize Profile</span>
          <p>The tool is in the power of your hands 💪</p>
        </div>
        <div id="form-container">
          <div id="from-cnt-tp">
            <div id="tp_fields">
              <div id="fields-fm-left">
                <span>Profile Picture</span>
              </div>
              <div id="fields-fm-right">
                <input
                  type="file"
                  name="upload-image"
                  id="upload-image"
                  accept=".jpg, .png"
                  ref={fileRef}
                  hidden
                  onChange={uploadFileToServer}
                />
                <label htmlFor="upload-image" id="upload_btn">
                  Upload Image
                  {/* <span id="tool-tip">You shine better with your face on</span> */}
                </label>
              </div>
            </div>
            <div id="tp_fields">
              <div id="fields-fm-left">
                <span>Your Name</span>
              </div>
              <div id="fields-fm-right">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  ref={usernameRef}
                />
              </div>
            </div>
            <div id="tp_fields">
              <div id="fields-fm-left">
                <span>About You</span>
              </div>
              <div id="fields-fm-right">
                <textarea
                  name="biography"
                  id="biography"
                  placeholder="write a summary about yourself"
                  autoComplete="off"
                  maxLength={100}
                  ref={biography}
                  onKeyUp={(event) => {
                    if (event.getModifierState("CapsLock")) {
                      setcapsLockMsg("CapsLock is turned on");
                      setshowCapsToast(true);
                    } else {
                      setcapsLockMsg("CapsLock is turned off");
                      setshowCapsToast(false);
                    }
                  }}
                ></textarea>
              </div>
            </div>
          </div>
          {showCapsToast ? (
            <span id="capsLockDetect">{capsLockMsg}</span>
          ) : null}
        </div>
        <div id="bt_fields">
          <button onClick={() => setSliderVisibility(false)}>Go Back</button>
          <button onClick={updateUserProfile}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
