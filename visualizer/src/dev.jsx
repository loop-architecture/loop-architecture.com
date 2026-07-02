// Dev harness for `vite dev`: mounts the editor with the example architectures.
import { mountEditor } from './index.js'

mountEditor(document.getElementById('app'), {
  examples: [
    { label: 'Docs', url: '/examples/docs.looparch.yaml' },
    { label: 'DevOps', url: '/examples/your-org.looparch.yaml' },
    { label: 'Data Product Builder', url: '/examples/data-product-builder.looparch.yaml' },
    { label: 'Self-Learning', url: '/examples/self-learning.looparch.yaml' },
  ],
})
