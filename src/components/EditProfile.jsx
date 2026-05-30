import { MdOutlineClose } from "react-icons/md";

export default function EditProfile() {
  return (
    <>
      <div className="flex flex-col md:w-[600px] bg-slate-600 rounded-2xl h-screen w-full">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center bg-gray-950 px-5 py-3 ">
            <div>
              <button aria-label="Close">
                <MdOutlineClose/>
              </button>
              <span>Edit profile</span>
            </div>
            <button className="btn-follow">Save</button>
          </div>

          {/* Banner + Avatar */}
          <div>
            <div>
              <button aria-label="Edit banner photo">
                <i className="ti ti-camera" aria-hidden="true"></i>
              </button>
            </div>

            <div>
              <div>
                <div>A</div>
                <button aria-label="Edit profile photo">
                  <i className="ti ti-camera" aria-hidden="true"></i>
                </button>
              </div>
              <p>
                Edit your photo
                <br />
                with Imagine
              </p>
            </div>

            <div>
              <button>
                <i className="ti ti-sparkles" aria-hidden="true"></i>
                Customize yourself in seconds
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div>
            <div>
              <label>Name</label>
              <input type="text" defaultValue="Alex" />
            </div>

            <div>
              <label>Bio</label>
              <textarea rows={3} />
            </div>

            <div>
              <label>Location</label>
              <input type="text" placeholder="Add your location" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
