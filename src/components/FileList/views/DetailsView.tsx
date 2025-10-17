import clsx from 'clsx'
import type { FileItem } from '@/components/FileList'
import { CheckIcon, FileIcon, FolderOpenIconLarge } from '@data/icons/icons'

type DetailsViewProps = {
  files: FileItem[]
  selectionMode: boolean
  isSelected: (index: number) => boolean
  toggleItem: (index: number) => void
}

export default function DetailsView({ files, selectionMode, isSelected, toggleItem }: DetailsViewProps) {
  return (
    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Modified</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Size</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
        {files.length === 0 && (
          <tr>
            <td colSpan={4} className="px-6 py-12 text-center text-sm text-gray-500 dark:text-gray-400">
              <FolderOpenIconLarge />
              <p>No files found</p>
            </td>
          </tr>
        )}
        {files.map((file, index) => (
          <tr
            key={file.id ?? index}
            onClick={() => selectionMode && toggleItem(index)}
            className={clsx('hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer', selectionMode && isSelected(index) && 'bg-blue-50 dark:bg-blue-900/30')}
          >
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                {selectionMode && (
                  <div className="mr-3">
                    <div className={clsx('w-5 h-5 rounded border-2 flex items-center justify-center transition-colors duration-200', isSelected(index) ? 'bg-blue-600 border-blue-600' : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700')}>
                      {isSelected(index) && <CheckIcon className="text-white w-3 h-3" />}
                    </div>
                  </div>
                )}
                <div className="flex-shrink-0 mr-3">{file.icon ?? <FileIcon className="text-blue-600 w-5 h-5" />}</div>
                <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{file.name ?? 'Unknown'}</div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.type ?? 'File'}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.modified ?? 'Unknown'}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{file.size ?? 'Unknown'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}


