import { green, red } from 'chalk'
import { join } from 'path'
import copy from 'recursive-copy'

/**
 * Copy the Templater package folder to the Espanso Packages directory.
 *
 * @returns {Promise<number>} The amount of files copied.
 */
const main = async (): Promise<number> => {
  try {
    const Source = join(__dirname, '..', 'Templater')
    const Destination = join(
      process.env.HOME || '',
      'Library',
      'Application Support',
      'espanso',
      'packages',
      'Templater'
    )

    const res = await copy(Source, Destination, {
      overwrite: true,
      dot: true,
      junk: false
    })

    if (res.length > 0) console.log(green(`Copied ${res.length} files`))
    else console.log(red('No files copied'))

    return res.length
  } catch (error) {
    throw error
  }
}

main()
  .then(res => {
    console.log(green('✅ Execution complete!'))
    console.log(res)
  })
  .catch(err => console.error(err))
