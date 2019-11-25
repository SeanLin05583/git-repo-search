import React, { useState } from 'react';
import './normalize.css';
import './style.css';
import { Banner, RepoData } from 'components';

function App() {
  const [repoData, setRepoData] = useState(fakeData);

  return (
    <div>
      <Banner setData={setRepoData} />
      <RepoData data={repoData} />
    </div>
  );
}

export default App;

const fakeData = [
  {
    "id": 8514,
    "node_id": "MDEwOlJlcG9zaXRvcnk4NTE0",
    "name": "rails",
    "full_name": "rails/rails",
    "private": false,
    "owner": {
      "login": "rails",
      "id": 4223,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjQyMjM=",
      "avatar_url": "https://avatars1.githubusercontent.com/u/4223?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rails",
      "html_url": "https://github.com/rails",
      "followers_url": "https://api.github.com/users/rails/followers",
      "following_url": "https://api.github.com/users/rails/following{/other_user}",
      "gists_url": "https://api.github.com/users/rails/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/rails/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/rails/subscriptions",
      "organizations_url": "https://api.github.com/users/rails/orgs",
      "repos_url": "https://api.github.com/users/rails/repos",
      "events_url": "https://api.github.com/users/rails/events{/privacy}",
      "received_events_url": "https://api.github.com/users/rails/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/rails/rails",
    "description": "Ruby on Rails",
    "fork": false,
    "url": "https://api.github.com/repos/rails/rails",
    "forks_url": "https://api.github.com/repos/rails/rails/forks",
    "keys_url": "https://api.github.com/repos/rails/rails/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/rails/rails/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/rails/rails/teams",
    "hooks_url": "https://api.github.com/repos/rails/rails/hooks",
    "issue_events_url": "https://api.github.com/repos/rails/rails/issues/events{/number}",
    "events_url": "https://api.github.com/repos/rails/rails/events",
    "assignees_url": "https://api.github.com/repos/rails/rails/assignees{/user}",
    "branches_url": "https://api.github.com/repos/rails/rails/branches{/branch}",
    "tags_url": "https://api.github.com/repos/rails/rails/tags",
    "blobs_url": "https://api.github.com/repos/rails/rails/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/rails/rails/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/rails/rails/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/rails/rails/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/rails/rails/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/rails/rails/languages",
    "stargazers_url": "https://api.github.com/repos/rails/rails/stargazers",
    "contributors_url": "https://api.github.com/repos/rails/rails/contributors",
    "subscribers_url": "https://api.github.com/repos/rails/rails/subscribers",
    "subscription_url": "https://api.github.com/repos/rails/rails/subscription",
    "commits_url": "https://api.github.com/repos/rails/rails/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/rails/rails/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/rails/rails/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/rails/rails/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/rails/rails/contents/{+path}",
    "compare_url": "https://api.github.com/repos/rails/rails/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/rails/rails/merges",
    "archive_url": "https://api.github.com/repos/rails/rails/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/rails/rails/downloads",
    "issues_url": "https://api.github.com/repos/rails/rails/issues{/number}",
    "pulls_url": "https://api.github.com/repos/rails/rails/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/rails/rails/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/rails/rails/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/rails/rails/labels{/name}",
    "releases_url": "https://api.github.com/repos/rails/rails/releases{/id}",
    "deployments_url": "https://api.github.com/repos/rails/rails/deployments",
    "created_at": "2008-04-11T02:19:47Z",
    "updated_at": "2019-11-25T04:05:17Z",
    "pushed_at": "2019-11-24T21:48:51Z",
    "git_url": "git://github.com/rails/rails.git",
    "ssh_url": "git@github.com:rails/rails.git",
    "clone_url": "https://github.com/rails/rails.git",
    "svn_url": "https://github.com/rails/rails",
    "homepage": "https://rubyonrails.org",
    "size": 191865,
    "stargazers_count": 44557,
    "watchers_count": 44557,
    "language": "Ruby",
    "has_issues": true,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 18017,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1266,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "forks": 18017,
    "open_issues": 1266,
    "watchers": 44557,
    "default_branch": "master",
    "score": 11.022855
  },
  {
    "id": 7569578,
    "node_id": "MDEwOlJlcG9zaXRvcnk3NTY5NTc4",
    "name": "discourse",
    "full_name": "discourse/discourse",
    "private": false,
    "owner": {
      "login": "discourse",
      "id": 3220138,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjMyMjAxMzg=",
      "avatar_url": "https://avatars2.githubusercontent.com/u/3220138?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/discourse",
      "html_url": "https://github.com/discourse",
      "followers_url": "https://api.github.com/users/discourse/followers",
      "following_url": "https://api.github.com/users/discourse/following{/other_user}",
      "gists_url": "https://api.github.com/users/discourse/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/discourse/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/discourse/subscriptions",
      "organizations_url": "https://api.github.com/users/discourse/orgs",
      "repos_url": "https://api.github.com/users/discourse/repos",
      "events_url": "https://api.github.com/users/discourse/events{/privacy}",
      "received_events_url": "https://api.github.com/users/discourse/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "html_url": "https://github.com/discourse/discourse",
    "description": "A platform for community discussion. Free, open, simple.",
    "fork": false,
    "url": "https://api.github.com/repos/discourse/discourse",
    "forks_url": "https://api.github.com/repos/discourse/discourse/forks",
    "keys_url": "https://api.github.com/repos/discourse/discourse/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/discourse/discourse/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/discourse/discourse/teams",
    "hooks_url": "https://api.github.com/repos/discourse/discourse/hooks",
    "issue_events_url": "https://api.github.com/repos/discourse/discourse/issues/events{/number}",
    "events_url": "https://api.github.com/repos/discourse/discourse/events",
    "assignees_url": "https://api.github.com/repos/discourse/discourse/assignees{/user}",
    "branches_url": "https://api.github.com/repos/discourse/discourse/branches{/branch}",
    "tags_url": "https://api.github.com/repos/discourse/discourse/tags",
    "blobs_url": "https://api.github.com/repos/discourse/discourse/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/discourse/discourse/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/discourse/discourse/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/discourse/discourse/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/discourse/discourse/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/discourse/discourse/languages",
    "stargazers_url": "https://api.github.com/repos/discourse/discourse/stargazers",
    "contributors_url": "https://api.github.com/repos/discourse/discourse/contributors",
    "subscribers_url": "https://api.github.com/repos/discourse/discourse/subscribers",
    "subscription_url": "https://api.github.com/repos/discourse/discourse/subscription",
    "commits_url": "https://api.github.com/repos/discourse/discourse/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/discourse/discourse/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/discourse/discourse/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/discourse/discourse/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/discourse/discourse/contents/{+path}",
    "compare_url": "https://api.github.com/repos/discourse/discourse/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/discourse/discourse/merges",
    "archive_url": "https://api.github.com/repos/discourse/discourse/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/discourse/discourse/downloads",
    "issues_url": "https://api.github.com/repos/discourse/discourse/issues{/number}",
    "pulls_url": "https://api.github.com/repos/discourse/discourse/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/discourse/discourse/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/discourse/discourse/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/discourse/discourse/labels{/name}",
    "releases_url": "https://api.github.com/repos/discourse/discourse/releases{/id}",
    "deployments_url": "https://api.github.com/repos/discourse/discourse/deployments",
    "created_at": "2013-01-12T00:25:55Z",
    "updated_at": "2019-11-25T07:04:31Z",
    "pushed_at": "2019-11-25T07:43:44Z",
    "git_url": "git://github.com/discourse/discourse.git",
    "ssh_url": "git@github.com:discourse/discourse.git",
    "clone_url": "https://github.com/discourse/discourse.git",
    "svn_url": "https://github.com/discourse/discourse",
    "homepage": "https://www.discourse.org",
    "size": 292523,
    "stargazers_count": 29455,
    "watchers_count": 29455,
    "language": "Ruby",
    "has_issues": false,
    "has_projects": false,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "forks_count": 6617,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 23,
    "license": {
      "key": "other",
      "name": "Other",
      "spdx_id": "NOASSERTION",
      "url": null,
      "node_id": "MDc6TGljZW5zZTA="
    },
    "forks": 6617,
    "open_issues": 23,
    "watchers": 29455,
    "default_branch": "master",
    "score": 22.566029
  }
]