import * as core from "@actions/core"
import * as github from "@actions/github"

import { Octokit } from "@octokit/core"

const token = core.getInput("token", { required: true })

const octokit = github.getOctokit(token)
