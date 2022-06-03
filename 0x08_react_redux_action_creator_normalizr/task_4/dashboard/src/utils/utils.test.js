import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";
const assert = require('assert');

it("getFullYear tests", () => {
    assert.equal(getFullYear(), new Date().getFullYear());
});

it("getFooterCopy tests", () => {
    assert.equal(getFooterCopy(true), "Holberton School");
    assert.equal(getFooterCopy(false), "Holberton School main dashboard");
});

it("getLatestNotifications tests", () => {
    assert.equal(getLatestNotification(), "<strong>Urgent requirement</strong> - complete by EOD");
});
