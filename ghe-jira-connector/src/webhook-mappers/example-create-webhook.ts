import { GitHub } from "../github/github-types";

const webhook = {
    "ref": "simple-tag",
    "ref_type": "tag",
    "master_branch": "master",
    "description": null,
    "pusher_type": "user",
    "repository": {
        "id": 118,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMTg=",
        "name": "Hello-World",
        "full_name": "Codertocat/Hello-World",
        "private": false,
        "owner": {
            "login": "Codertocat",
            "id": 4,
            "node_id": "MDQ6VXNlcjQ=",
            "avatar_url": "https://octocoders.github.io/avatars/u/4?",
            "gravatar_id": "",
            "url": "https://octocoders.github.io/api/v3/users/Codertocat",
            "html_url": "https://octocoders.github.io/Codertocat",
            "followers_url": "https://octocoders.github.io/api/v3/users/Codertocat/followers",
            "following_url": "https://octocoders.github.io/api/v3/users/Codertocat/following{/other_user}",
            "gists_url": "https://octocoders.github.io/api/v3/users/Codertocat/gists{/gist_id}",
            "starred_url": "https://octocoders.github.io/api/v3/users/Codertocat/starred{/owner}{/repo}",
            "subscriptions_url": "https://octocoders.github.io/api/v3/users/Codertocat/subscriptions",
            "organizations_url": "https://octocoders.github.io/api/v3/users/Codertocat/orgs",
            "repos_url": "https://octocoders.github.io/api/v3/users/Codertocat/repos",
            "events_url": "https://octocoders.github.io/api/v3/users/Codertocat/events{/privacy}",
            "received_events_url": "https://octocoders.github.io/api/v3/users/Codertocat/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://octocoders.github.io/Codertocat/Hello-World",
        "description": null,
        "fork": false,
        "url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World",
        "forks_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/forks",
        "keys_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/keys{/key_id}",
        "collaborators_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/collaborators{/collaborator}",
        "teams_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/teams",
        "hooks_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/hooks",
        "issue_events_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/issues/events{/number}",
        "events_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/events",
        "assignees_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/assignees{/user}",
        "branches_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/branches{/branch}",
        "tags_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/tags",
        "blobs_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/git/blobs{/sha}",
        "git_tags_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/git/tags{/sha}",
        "git_refs_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/git/refs{/sha}",
        "trees_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/git/trees{/sha}",
        "statuses_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/statuses/{sha}",
        "languages_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/languages",
        "stargazers_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/stargazers",
        "contributors_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/contributors",
        "subscribers_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/subscribers",
        "subscription_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/subscription",
        "commits_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/commits{/sha}",
        "git_commits_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/git/commits{/sha}",
        "comments_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/comments{/number}",
        "issue_comment_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/issues/comments{/number}",
        "contents_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/contents/{+path}",
        "compare_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/compare/{base}...{head}",
        "merges_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/merges",
        "archive_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/{archive_format}{/ref}",
        "downloads_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/downloads",
        "issues_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/issues{/number}",
        "pulls_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/pulls{/number}",
        "milestones_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/milestones{/number}",
        "notifications_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/notifications{?since,all,participating}",
        "labels_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/labels{/name}",
        "releases_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/releases{/id}",
        "deployments_url": "https://octocoders.github.io/api/v3/repos/Codertocat/Hello-World/deployments",
        "created_at": "2019-05-15T19:37:07Z",
        "updated_at": "2019-05-15T19:38:15Z",
        "pushed_at": "2019-05-15T19:38:22Z",
        "git_url": "git://octocoders.github.io/Codertocat/Hello-World.git",
        "ssh_url": "git@octocoders.github.io:Codertocat/Hello-World.git",
        "clone_url": "https://octocoders.github.io/Codertocat/Hello-World.git",
        "svn_url": "https://octocoders.github.io/Codertocat/Hello-World",
        "homepage": null,
        "size": 0,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "Ruby",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": true,
        "forks_count": 1,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 2,
        "license": null,
        "forks": 1,
        "open_issues": 2,
        "watchers": 0,
        "default_branch": "master"
    },
    "enterprise": {
        "id": 1,
        "slug": "github",
        "name": "GitHub",
        "node_id": "MDg6QnVzaW5lc3Mx",
        "avatar_url": "https://octocoders.github.io/avatars/b/1?",
        "description": null,
        "website_url": null,
        "html_url": "https://octocoders.github.io/businesses/github",
        "created_at": "2019-05-14T19:31:12Z",
        "updated_at": "2019-05-14T19:31:12Z"
    },
    "sender": {
        "login": "Codertocat",
        "id": 4,
        "node_id": "MDQ6VXNlcjQ=",
        "avatar_url": "https://octocoders.github.io/avatars/u/4?",
        "gravatar_id": "",
        "url": "https://octocoders.github.io/api/v3/users/Codertocat",
        "html_url": "https://octocoders.github.io/Codertocat",
        "followers_url": "https://octocoders.github.io/api/v3/users/Codertocat/followers",
        "following_url": "https://octocoders.github.io/api/v3/users/Codertocat/following{/other_user}",
        "gists_url": "https://octocoders.github.io/api/v3/users/Codertocat/gists{/gist_id}",
        "starred_url": "https://octocoders.github.io/api/v3/users/Codertocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://octocoders.github.io/api/v3/users/Codertocat/subscriptions",
        "organizations_url": "https://octocoders.github.io/api/v3/users/Codertocat/orgs",
        "repos_url": "https://octocoders.github.io/api/v3/users/Codertocat/repos",
        "events_url": "https://octocoders.github.io/api/v3/users/Codertocat/events{/privacy}",
        "received_events_url": "https://octocoders.github.io/api/v3/users/Codertocat/received_events",
        "type": "User",
        "site_admin": false
    },
    "installation": {
        "id": 5,
        "node_id": "MDIzOkludGVncmF0aW9uSW5zdGFsbGF0aW9uNQ=="
    }
} as GitHub.CreateWebhook;

export default webhook;