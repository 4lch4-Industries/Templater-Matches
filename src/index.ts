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

    const { length } = await copy(Source, Destination, {
      overwrite: true,
      dot: true,
      junk: false
    })

    return length
  } catch (error) {
    throw error
  }
}

main()
  .then(res => {
    if (res > 0) console.log(green(`Copied ${res} files`))
    else console.log(red('No files copied'))

    console.log(green('✅ Execution complete!'))
  })
  .catch(err => console.error(err))
