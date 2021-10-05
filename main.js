"use strict";
exports.__esModule = true;
var xmlParser = require("fast-xml-parser");
var convert = function (xmlString) {
    var result = xmlParser.parse(xmlString)["JobSearchs"]["JobSearch"]["JobCriteria"];
    console.log(result);
    var parsedJson = {
        country: result["CountryCode"],
        keyword: result["KeywordSearchCriterias"],
        jobFunctions: result["UniversalJobAreas"],
        locations: result["JobLocations"],
        minSalary: result["SalaryFrom"],
        maxSalary: result["SalaryTo"],
        jobTypes: result["JobTypes"],
        careerLevels: result["CareerLevel"],
        salaryType: result["SalaryType"]
    };
    console.log(parsedJson);
};
convert("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<JobSearchs>\n   <JobSearch ver=\"0\">\n      <JobCriteria>\n         <KeywordSearchFields>JobDetails</KeywordSearchFields>\n         <KeywordOption>Any</KeywordOption>\n         <WildcardOption>None</WildcardOption>\n         <KeywordSearchCriterias>\n            <KeywordSearchCriteria>\n               <Keywords>a</Keywords>\n               <KeywordSearchFields>Companies</KeywordSearchFields>\n               <KeywordOption>Complex</KeywordOption>\n               <WildcardOption>AllPhrase</WildcardOption>\n            </KeywordSearchCriteria>\n         </KeywordSearchCriterias>\n         <Positions />\n         <PositionExclude />\n         <Companies />\n         <CompanyExclude />\n         <UniversalJobAreas>1</UniversalJobAreas>\n         <JobChannels />\n         <JobLocations />\n         <ExactMatch_StateDistrict>False</ExactMatch_StateDistrict>\n         <YearsOfWorkExpFrom>0</YearsOfWorkExpFrom>\n         <YearsOfWorkExpTo>0</YearsOfWorkExpTo>\n         <ExactMatch_Exp>False</ExactMatch_Exp>\n         <ExactMatch_EducationLevel>False</ExactMatch_EducationLevel>\n         <SalaryFrom>0</SalaryFrom>\n         <SalaryTo>0</SalaryTo>\n         <ExactMatch_Salary>True</ExactMatch_Salary>\n         <SalaryType>1</SalaryType>\n         <SearchSalaryDetail>True</SearchSalaryDetail>\n         <JobTypes />\n         <CareerLevel />\n         <AdsListDuration>30</AdsListDuration>\n         <AccountSubAccount />\n         <AccountNum />\n         <SubAccont />\n         <EmpIndustry />\n         <EmpIndustryExclude />\n         <AdsStatus>A</AdsStatus>\n         <CountryCode>HK</CountryCode>\n         <DisplayBlindAds>True</DisplayBlindAds>\n         <JobIndustry />\n         <OverseasCountries />\n         <LocalJobOnly>False</LocalJobOnly>\n         <PostDateRoundToMinute>False</PostDateRoundToMinute>\n      </JobCriteria>\n   </JobSearch>\n</JobSearchs>");
