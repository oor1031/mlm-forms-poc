<form id="theForm" class="wj-dialog">

<div class="row">
    <div class="col-xs-6">
        <div class="wj-labeled-input">
            <input id="programName" disabled required/>
            <label for="programName">Program Name</label>
            <div class="wj-error" tabindex="-1">Program Name Required</div>
        </div>
    </div>
    <div class="col-xs-6">
        <div class="wj-labeled-input">
            <input id="programGroup" required/>
            <label for="programGroup">Program Group</label>
            <div class="wj-error" tabindex="-1">Program Group Required</div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="startDate"/>
            <label for="startDate">Start Date</label>
            <div class="wj-error" tabindex="-1">Start Date Required</div>

        </div>
    </div>
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="endDate"/>
            <label for="endDate">End Date</label>
            <div class="wj-error" tabindex="-1">End Date Required</div>

        </div>
    </div>
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="lrpYear" required/>
            <label for="lrpYear">LRP Year</label>
            <div class="wj-error" tabindex="-1">LRP Year Required</div>

        </div>
    </div>
</div>

<div class="row">

    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <div id="businessOwner">
                <mgt-people-picker data-type="selected-person" id="businessOwnerPicker"></mgt-people-picker>

            </div>

            <label for="businessOwner">Business Owner</label>
        </div>
    </div>


    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <div id="stackLead">
                <mgt-people-picker data-type="selected-person" id="stackLeadPicker"></mgt-people-picker>

            </div>
            <label for="stackLead">Stack Lead</label>
        </div>
    </div>

    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <div id="vpDirectReport">
                <mgt-people-picker data-type="selected-person" id="vpDirectReportPicker"></mgt-people-picker>

            </div>                            <label for="vpDirectReport">VP Direct Report</label>
        </div>
    </div>

</div>

<div class="row">
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="programType" required/>
            <label for="programType">Program Type</label>
            <div class="wj-error" tabindex="-1">Program Type Required</div>

        </div>
    </div>

    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="programAcronym" required/>
            <label for="programAcronym">Program Acronym</label>
            <div class="wj-error" tabindex="-1">Program Acronym Required</div>

        </div>
    </div>
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="oracleAcronym" required/>
            <label for="oracleAcronym">Oracle Acronym</label>
            <div class="wj-error" tabindex="-1">Oracle Acronym Required</div>

        </div>
    </div>
</div>


<div class="row">
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="subProgramList"/>
            <label for="subProgramList">Sub-Programs</label>
        </div>
    </div>

    <div class="col-xs-4">

            <div class="wj-labeled-input">
                <input id="activityDescriptor"/>
                <label for="activityDescriptor">Activity Descriptors</label>

            </div>

    </div>
</div>

<div class="row">
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="wattsApprovalStatus"/>
            <label for="wattsApprovalStatus">Watts Approval Status</label>
        </div>
    </div>
    <div class="col-xs-4">
        <div class="wj-labeled-input">
            <input id="wattsApprovalDate"/>
            <label for="wattsApprovalDate">Watts Approval Date</label>
        </div>
    </div>

</div>


<div class="wj-labeled-input" style="visibility: hidden">
    <input id="sales"/>
    <label for="sales"  style="visibility: hidden">Sales</label>
</div>
<div class="wj-labeled-input" style="visibility: hidden">
    <input id="expenses"/>
    <label for="expenses"  style="visibility: hidden">Expenses</label>
</div>
<div class="modal-footer" style="align-content: center">
    <button type="submit" class="btn btn-primary">
        <span class="wj-glyph-check"></span> Submit
    </button>
    <button
            type="button"
            class="btn btn-danger wj-hide"
            id="modalFooterCancelButton"
    >
        Cancel
    </button>
</div>
</form>
