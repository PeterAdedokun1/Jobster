import { FormRow } from "../../Components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
const AddJobs = () => {
   const {
     isLoading,
     position,
     company,
     jobLocation,
     jobType,
     jobTypeOptions,
     status,
     statusOptions,
     isEditing,
     editJobId,
   } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error("")
      return;
    }
  
  }
    const handleJobInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
    };
  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? "edit job" : "add job"}</h3>

        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* location */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* job status */}

          {/* job type */}

          {/* btn container */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log("clear values")}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
