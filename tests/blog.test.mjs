import assert from 'node:assert/strict'
import test from 'node:test'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { BLOG_POSTS, getBlogPost } from '../lib/blog/posts.ts'

test('blog post slugs are unique', () => {
  const slugs = BLOG_POSTS.map((post) => post.slug)
  assert.equal(new Set(slugs).size, slugs.length)
  assert.equal(BLOG_POSTS.length, 10, 'The editorial plan includes ten published guides')
})

test('each post can be found by its slug', () => {
  for (const post of BLOG_POSTS) {
    assert.equal(getBlogPost(post.slug), post)
  }
})

test('unknown blog slugs return no post', () => {
  assert.equal(getBlogPost('missing-post'), undefined)
})

test('each post has an image and at least one readable section', () => {
  for (const post of BLOG_POSTS) {
    assert.ok(post.image.startsWith('/'))
    assert.ok(post.imageAlt.trim())
    assert.ok(existsSync(resolve('public', `.${post.image}`)), `Missing image asset: ${post.image}`)
    assert.ok(post.sections.length > 0)
  }
})

test('service and gemstone artwork is available in public', () => {
  const assets = [
    '/service-kundali.jpg',
    '/service-puja.jpg',
    '/service-gems.jpg',
    '/vastu-home.jpg',
    '/gem-pukhraj.jpg',
    '/gem-neelam.jpg',
    '/gem-panna.jpg',
    '/gem-manikya.jpg',
    '/gem-moti.jpg',
    '/gem-rudraksha.jpg',
  ]

  for (const asset of assets) {
    assert.ok(existsSync(resolve('public', `.${asset}`)), `Missing image asset: ${asset}`)
  }
})
